<template>
  <v-card class="mx-auto" max-width="500">
    <v-toolbar color="#f2f2f2" light elevation="0">
      <v-toolbar-title class="mx-auto">
        <v-avatar color="#160c49" class="mr-2" size="42"
          ><span class="white--text headline">{{ number }}</span></v-avatar
        >
        <strong style="color: #150b48">{{ title }}</strong></v-toolbar-title
      >
      <!-- <v-btn color="#160c49" dark absolute bottom left fab>
        <v-icon>{{ number }}</v-icon>
      </v-btn> -->
    </v-toolbar>

    <v-card-text class="pt-4 pb-4 px-8">
      <v-container class="mx-auto">
        <v-form @submit.prevent="handleStep">
          <slot></slot>
          <v-row v-if="goTo && buttonText">
            <v-col>
              <v-btn
                v-if="btnLoading"
                color="#160c49"
                block
                class="white--text"
                large
                type="submit"
                loading
                disabled
                ><strong>{{ buttonText }}</strong></v-btn
              >
              <v-btn
                v-else
                color="#160c49"
                block
                class="white--text"
                large
                type="submit"
                :disabled="isDisabled"
                ><strong>{{ buttonText }}</strong></v-btn
              >
            </v-col>
          </v-row>
        </v-form>
      </v-container>
    </v-card-text>
    <v-dialog v-model="dialog" width="500" persistent>
      <v-card>
        <!-- <v-card-title class="headline grey lighten-2"> {{ text }} </v-card-title> -->

        <v-card-text>
          <v-container>
            <v-row class="d-flex flex-column align-center justify-center">
              <v-col class="d-flex justify-center">
                <v-icon color="success" size="150">mdi-check</v-icon>
              </v-col>
              <v-col>
                <h2 class="text-center">{{ text }}</h2>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="closeDialog"> Chiudi </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-card>
</template>

<script>
import Api from "../apis/Api";
export default {
  props: {
    title: String,
    number: String,
    buttonText: String,
    goTo: String,
    isDisabled: Boolean,
    payload: Object,
    isFiles: Boolean,
  },
  data: () => ({
    dialog: false,
    text: "",
    btnLoading: false,
  }),
  computed: {
    form() {
      return this.$store.state.form;
    },
  },
  methods: {
    handleStep() {
      this.$store.commit("setStep", this.payload);
      if (this.payload) {
        if (this.payload.email) {
          this.sendVerificationMail();
        } else if (this.payload.verification_code) {
          this.sendMailVerificationCode();
        } else if (this.payload.telefono) {
          this.sendVerificationSMS();
        } else if (this.payload.sms_code) {
          this.sendSMSVerificationCode();
        } else if (this.isFiles) {
          this.handleFileUpload();
        } else if (this.payload.selfie) {
          this.handleSelfieUpload();
        } else {
          this.$router.push({ name: this.goTo });
        }
      } else {
        this.$router.push({ name: this.goTo });
      }
    },
    handleFileUpload() {
      this.btnLoading = true;
      const formData = new FormData();
      formData.append("user_id", localStorage.userId);
      formData.append("fronte", this.payload.fronte);
      formData.append("retro", this.payload.retro);
      formData.append("codice_fiscale", this.payload.codice_fiscale);

      Api()
        .post("/files", formData)
        .then((response) => {
          if (response.status === 200) {
            console.log(response);
            this.btnLoading = false;
            this.openDialog("I file sono stati caricati con successo");
          } else {
            this.btnLoading = false;
            alert(
              "Si è verificato un problema durante il caricamento dei file, riprova più tardi"
            );
          }
        })
        .catch((error) => {
          this.btnLoading = false;

          return alert(error);
        });
    },
    handleSelfieUpload() {
      this.btnLoading = true;
      const formData = new FormData();
      formData.append("user_id", localStorage.userId);
      formData.append("selfie", this.payload.selfie);

      Api()
        .post("/selfie", formData)
        .then((response) => {
          if (response.status === 200) {
            console.log(response);
            this.btnLoading = false;
            this.openDialog("I file sono stati caricati con successo");
          } else {
            this.btnLoading = false;
            alert(
              "Si è verificato un problema durante il caricamento dei file, riprova più tardi"
            );
          }
        })
        .catch((error) => {
          this.btnLoading = false;

          return alert(error);
        });
    },
    sendVerificationMail() {
      // console.log(this.payload);
      this.btnLoading = true;
      Api()
        .post("/send-verification-mail", this.$store.state.form)
        .then((response) => {
          this.btnLoading = false;
          this.$router.push({ name: this.goTo });
          // this.openDialog("Il tuo codice è stato inviato alla tua email!");
          console.log("response", response);
          // if (response.status === 200) {
          //   console.log(response);
          //   this.btnLoading = false;
          //   this.openDialog("I file sono stati caricati con successo");
          // } else {
          //   this.btnLoading = false;
          //   alert(
          //     "Si è verificato un problema durante il caricamento dei file, riprova più tardi"
          //   );
          // }
        })
        .catch((error) => {
          this.btnLoading = false;
          return alert(error);
        });
    },
    sendMailVerificationCode() {
      console.log(this.payload);
      // return;

      this.btnLoading = true;
      Api()
        .post("/send-verification-code", this.payload)
        .then((response) => {
          if (response.status === 200) {
            console.log(response);
            localStorage.userId = response.data.user_id;
            this.btnLoading = false;
            this.$router.push({ name: this.goTo });
          } else {
            this.btnLoading = false;
            alert(
              "Si è verificato un problema durante la verifica della tua email, riprova"
            );
          }
        })
        .catch((error) => {
          this.btnLoading = false;
          return alert(error);
        });
    },
    sendVerificationSMS() {
      console.log(this.payload);
      // return;
      const payload = {
        telefono: this.payload.telefono,
        user_id: localStorage.userId,
      };

      this.btnLoading = true;
      Api()
        .post("/send-verification-sms", payload)
        .then((response) => {
          if (response.status === 200) {
            console.log(response);

            this.btnLoading = false;
            this.$router.push({ name: this.goTo });
          } else {
            this.btnLoading = false;
            alert(
              "Si è verificato un problema durante la verifica della tua email, riprova"
            );
          }
        })
        .catch((error) => {
          this.btnLoading = false;
          return alert(error);
        });
    },
    sendSMSVerificationCode() {
      this.btnLoading = true;
      const payload = {
        verification_code: this.payload.sms_code,
        user_id: localStorage.userId,
      };
      Api()
        .post("/verify-sms-code", payload)
        .then((response) => {
          if (response.status === 200) {
            console.log(response);

            this.btnLoading = false;
            this.$router.push({ name: this.goTo });
          } else {
            this.btnLoading = false;
            alert(
              "Si è verificato un problema durante la verifica della tua email, riprova"
            );
          }
        })
        .catch((error) => {
          this.btnLoading = false;
          return alert(error);
        });
    },
    openDialog(text) {
      this.text = text;
      this.dialog = true;
    },
    closeDialog() {
      this.dialog = false;
      this.$router.push({ name: this.goTo });
    },
  },
};
</script>