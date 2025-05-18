<script lang="ts">
  import { fade } from "svelte/transition";
  import SvaraLogo from "../lib/SvaraLogo.svelte";

  import { masterServices } from "../services.svelte";
  import { config } from "../storage.svelte";

  const inputs = $state({
    email: {
      ele: {} as HTMLInputElement,
      value: "",
    },
    password: {
      ele: {} as HTMLInputElement,
      value: "",
    },
    otp: {
      ele: {} as HTMLInputElement,
      value: "",
    },
  });

  const staging = $state({
    loading: false,
    phase: "email",
    infoBuild: {},
  } as {
    loading: boolean;
    phase: "email" | "password" | "otp" | "complete";
    infoBuild: {
      email: string;
      profile: {
        username: string;
        uid: string;
        email: string;
        firstname: string;
        status: string;
      };
      sessionToken: string;
    };
  });

  const handleContinue = () => {
    switch (staging.phase) {
      case "email":
        if (!inputs.email.ele.checkValidity()) {
          inputs.email.ele.reportValidity();
          return;
        }

        const email = inputs.email.value;
        if (email.length < 2) return;

        staging.loading = true;
        masterServices.auth.validateEmail(email).then((data) => {
          if (data == true) {
            staging.infoBuild.email = email;
            staging.phase = "password";
          } else {
            alert(
              `The provided email address is not registered with JioSaavn! (${email})`
            );
          }
          staging.loading = false;
        });
        break;

      case "password":
        const password = inputs.password.value;
        if (!inputs.password.ele.checkValidity()) {
          inputs.password.ele.reportValidity();
          return;
        }
        if (password.length < 7) return;

        staging.loading = true;
        masterServices.auth
          .requestOTP(staging.infoBuild.email, password)
          .then((data) => {
            if (data == true) {
              staging.phase = "otp";
            } else {
              alert(
                `The provided password is incorrect (${staging.infoBuild.email})`
              );
            }
            staging.loading = false;
          });
        break;

      case "otp":
        const otp = inputs.otp.value;
        if (!inputs.otp.ele.checkValidity()) {
          inputs.otp.ele.reportValidity();
          return;
        }

        staging.loading = true;
        masterServices.auth
          .validateOTP(staging.infoBuild.email, otp)
          .then((data) => {
            if (data.status && data.status == "success") {
              staging.infoBuild = {
                ...staging.infoBuild,
                profile: data.data,
                sessionToken: data.sessionToken,
              };
              staging.phase = "complete";

              $config.connections.jiosaavn = {
                data: {
                  meta: data.data,
                  token: data.sessionToken,
                },
                active: true,
              };
            } else {
              alert(
                `The provided otp is incorrect (${staging.infoBuild.email})`
              );
            }
            staging.loading = false;
          });
        break;
      default:
        window.location.href = "#dash";
    }
  };
</script>

<div
  class="w-[100dvw] h-[100dvh] bg-black flex flex-col items-center justify-center"
  style="background-size: 40px 40px;
  background-image: radial-gradient(circle, #FFF 1px, rgba(0, 0, 0, 0) 1px);"
>
  <div
    class="w-[90%] max-w-[30rem] bg-white text-black dark:bg-black dark:text-white rounded-md p-2.5 ring-1 ring-black/50 dark:ring-white/50"
    class:pointer-events-none={staging.loading}
  >
    <div class="flex flex-row items-center justify-end space-x-[2ch] relative">
      <p class="text-xs absolute left-0">
        Svara-JioSaavn Authenticator<br />developmental beta
      </p>
      <SvaraLogo class="size-[5dvh]" />
      <svg
        role="img"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        class="size-[5dvh] fill-black dark:fill-white"
        ><title>Jio</title><path
          d="M12 0A12 12 0 1 1 0 12 12 12 0 0 1 12 0m5.587 14.559c-.883 0-1.49-.648-1.49-1.574 0-.912.62-1.56 1.49-1.56s1.491.648 1.491 1.573c0 .897-.634 1.56-1.49 1.56zm.03-5.152c-2.265 0-3.772 1.437-3.772 3.576 0 2.195 1.451 3.604 3.729 3.604 2.264 0 3.755-1.409 3.755-3.59 0-2.153-1.475-3.59-3.713-3.59zM11.78 6.272c-.856 0-1.395.483-1.395 1.243 0 .774.552 1.257 1.435 1.257.857 0 1.395-.483 1.395-1.257s-.552-1.243-1.435-1.243m.152 3.204h-.277c-.675 0-1.187.317-1.187 1.285v4.42c0 .98.496 1.284 1.216 1.284h.275c.677 0 1.16-.33 1.16-1.285v-4.419c0-.995-.47-1.285-1.187-1.285M8.316 7.392h-.4c-.76 0-1.174.43-1.174 1.285v4.13c0 1.063-.36 1.436-1.2 1.436-.662 0-1.201-.29-1.63-.816C3.87 13.373 3 13.786 3 14.81c0 1.104 1.035 1.781 2.955 1.781 2.334 0 3.563-1.173 3.563-3.742V8.675c0-.856-.413-1.283-1.202-1.283"
        /></svg
      >
    </div>
    <div class="h-[1px] w-full bg-black/50 dark:bg-white/50 my-[1ch]"></div>
    <h1 class="text-3xl font-bold mt-[2ch]">
      {#if staging.phase == "complete"}JioSaavn Link Success!{:else}Link
        JioSaavn{/if}
    </h1>
    <p class="-mt-0.5 text-black/75 dark:text-white/75">
      {#if staging.phase == "complete"}Authorized Svara access to your JioSaavn
        account.{:else}
        Authorize Svara access to your JioSaavn account.{/if}
      {#if staging.phase == "email"}No JioSaavn email address?
        <a
          class="text-blue-600/85 dark:text-blue-500/85 after:content-['_↗']"
          href="https://help.jiosaavn.com/hc/en-us/articles/360020256612-How-do-I-change-or-add-my-name-email-ID-or-mobile-number-on-my-account"
          target="_blank"
        >
          Learn how to add one
        </a>{:else if staging.phase == "password"}<span class="text-sm"
          >Your credentials are used only for authentication and never stored.
          An OTP will be sent to {staging.infoBuild.email}.</span
        >{:else if staging.phase == "otp"}Continue with the OTP delivered to {staging
          .infoBuild.email}.
      {/if}
    </p>
    <div class="relative mt-[4ch]">
      {#if staging.phase == "email"}
        <input
          type="email"
          autocomplete="email"
          spellcheck="false"
          inputmode="email"
          id="email-input"
          class="px-2.5 pb-2.5 pt-4 w-full text-[16px] text-black dark:text-white bg-transparent rounded-lg ring-1 ring-black/50 dark:ring-white/50 invalid:ring-red-600 invalid:dark:ring-red-500 dark:focus:ring-blue-500 focus:outline-none focus:ring-blue-600 peer appearance-none"
          placeholder=" "
          bind:this={inputs.email.ele}
          bind:value={inputs.email.value}
        />
        <label
          for="email-input"
          class="absolute text-sm text-black/75 dark:text-white/75 duration-300 transform -translate-y-4 scale-[85%] px-1.5 top-2 z-10 origin-[0] bg-white dark:bg-black peer-focus:px-1.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-[85%] peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
          >email address</label
        >
      {:else if staging.phase == "password"}
        <input
          type="password"
          autocomplete="current-password"
          inputmode="text"
          spellcheck="false"
          aria-describedby="password-info"
          id="password-input"
          minlength="7"
          class="px-2.5 pb-2.5 pt-4 w-full text-[16px] text-black dark:text-white bg-transparent rounded-lg ring-1 ring-black/50 dark:ring-white/50 invalid:ring-red-600 invalid:dark:ring-red-500 dark:focus:ring-blue-500 focus:outline-none focus:ring-blue-600 peer appearance-none"
          placeholder=" "
          bind:this={inputs.password.ele}
          bind:value={inputs.password.value}
        />
        <label
          for="password-input"
          class="absolute text-sm text-black/75 dark:text-white/75 duration-300 transform -translate-y-4 scale-[85%] px-1.5 top-2 z-10 origin-[0] bg-white dark:bg-black peer-focus:px-1.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-[85%] peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
        >
          password</label
        >
      {:else if staging.phase == "otp"}
        <input
          type="text"
          id="otp-input"
          inputmode="numeric"
          autocomplete="off"
          aria-label="one-time password"
          pattern="\d*"
          maxlength="10"
          class="px-2.5 pb-2.5 pt-4 w-full text-[16px] text-black dark:text-white bg-transparent rounded-lg ring-1 ring-black/50 dark:ring-white/50 invalid:ring-red-600 invalid:dark:ring-red-500 dark:focus:ring-blue-500 focus:outline-none focus:ring-blue-600 peer appearance-none"
          placeholder=" "
          bind:this={inputs.otp.ele}
          bind:value={inputs.otp.value}
        />
        <label
          for="otp-input"
          class="absolute text-sm text-black/75 dark:text-white/75 duration-300 transform -translate-y-4 scale-[85%] px-1.5 top-2 z-10 origin-[0] bg-white dark:bg-black peer-focus:px-1.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-[85%] peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
        >
          one-time password</label
        >
      {:else if staging.phase == "complete"}
        <div
          class="ring-1 ring-black/50 dark:ring-white/50 mb-[1ch] p-1 rounded-md"
        >
          <p class="font-bold">
            <span
              class="text-xs bg-yellow-600 dark:bg-yellow-500 text-white dark:text-black p-1 rounded-md"
              >{staging.infoBuild.profile.status}</span
            >
            {staging.infoBuild.profile.firstname} ({staging.infoBuild.profile
              .username})
          </p>
          <span
            class="text-[10px] bg-black/50 dark:bg-white/50 p-0.5 text-white dark:text-black"
            >SVARAJIOSAAVN_ {staging.infoBuild.profile.uid}</span
          >
        </div>
      {/if}
    </div>

    <button
      onclick={handleContinue}
      type="button"
      class="w-full text-sm bg-blue-600 dark:bg-blue-500 text-white dark:text-black rounded-lg mt-2.5"
      class:animate-pulse={staging.loading}
    >
      {#if staging.loading}
        <svg
          transition:fade={{ duration: 500 }}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="size-[1.2em] inline animate-spin"
          style="animation-duration: 0.75s;"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
          />
        </svg>
      {/if}

      <span>continue</span>
    </button>
    {#if staging.phase == "email" && staging.loading == false}
      <button
        transition:fade={{ duration: 500 }}
        onclick={() => {
          window.location.hash = "#dashboard";
        }}
        type="button"
        class="w-full text-sm bg-black/25 dark:bg-white/15 dark:text-white text-black rounded-lg mt-2.5"
        class:animate-pulse={staging.loading}
      >
        <span>cancel</span>
      </button>
    {/if}
  </div>
</div>
