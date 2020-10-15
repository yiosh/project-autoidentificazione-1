<template>
  <step
    title="ALLEGA DOCUMENTO"
    number="8"
    buttonText="PROCEDI"
    goTo="StepNine"
    :isDisabled="isDisabled"
    :payload="form"
    :isFiles="true"
  >
    <v-row>
      <v-col cols="12" md="4" class="d-flex justify-center align-center">
        <v-icon size="150">mdi-file-document-outline</v-icon>
      </v-col>
      <v-col cols="12" md="8" class="d-flex align-center">
        <v-form class="w-100">
          <v-file-input
            accept="image/*"
            label="Fronte"
            v-model="form.fronte"
          ></v-file-input>
          <v-file-input
            accept="image/*"
            label="Retro"
            v-model="form.retro"
          ></v-file-input>
          <v-file-input
            accept="image/*"
            label="Codice Fiscale"
            v-model="form.codice_fiscale"
          ></v-file-input>
        </v-form>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <p>
          I documenti accettati sono: Carta d'identità, Patente e Passaporto.
          <br />
          Per i nati all'estero e necessario presentare il Passaporto o la Carta
          d'identità Italiana in corso di validità.
        </p>
      </v-col>
    </v-row>
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
      fronte: null,
      retro: null,
      codice_fiscale: null,
    },
  }),
  computed: {
    isDisabled() {
      if (this.form.fronte && this.form.retro && this.form.codice_fiscale) {
        return false;
      }
      return true;
    },
  },
};
</script>