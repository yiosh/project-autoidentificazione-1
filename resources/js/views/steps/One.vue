<template>
  <step
    title="AUTOIDENTIFICAZIONE"
    number="1"
    buttonText="PROCEDI"
    goTo="StepTwo"
    :isDisabled="isDisabled"
    :payload="form"
  >
    <v-form @submit.prevent="handleStep">
      <v-row>
        <v-col cols="12" md="4" class="d-flex justify-center">
          <v-icon size="150">mdi-shield-key-outline</v-icon>
        </v-col>
        <v-col cols="12" md="8">
          <v-text-field
            dense
            color="#160c49"
            label="Nome"
            v-model="form.nome"
            outlined
          ></v-text-field>
          <v-text-field
            dense
            color="#160c49"
            label="Cognome"
            v-model="form.cognome"
            outlined
          ></v-text-field>
          <v-text-field
            dense
            color="#160c49"
            counter="16"
            :rules="[rules.counterMax, rules.counterMin]"
            label="Codice Fiscale"
            v-model="form.codice_fiscale"
            outlined
          ></v-text-field>
          <v-text-field
            dense
            color="#160c49"
            label="Username"
            v-model="form.username"
            outlined
          ></v-text-field>
        </v-col>
      </v-row>
    </v-form>
  </step>
</template>

<script>
import Step from "../../components/Step";

export default {
  components: {
    Step,
  },
  data: () => ({
    form: {
      nome: "",
      cognome: "",
      codice_fiscale: "",
      username: "",
    },
    rules: {
      counterMin: (value) => value.length === 16 || "Min 16 caratteri",
      counterMax: (value) => value.length <= 16 || "Max 16 caratteri",
    },
  }),
  computed: {
    isDisabled() {
      if (
        this.form.nome &&
        this.form.cognome &&
        this.form.codice_fiscale &&
        this.form.codice_fiscale.length === 16 &&
        this.form.username
      ) {
        return false;
      }
      return true;
    },
  },
};
</script>
