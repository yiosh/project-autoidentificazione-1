<template>
  <step
    title="CONFERMA DOCUMENTO"
    number="9"
    buttonText="PROCEDI"
    goTo="StepTen"
    :payload="form"
  >
    <v-row>
      <v-col cols="12" md="5" class="d-flex justify-center align-center">
        <v-icon size="150">mdi-camera</v-icon>
      </v-col>
      <v-col cols="12" md="7" class="d-flexalign-center">
        <v-form class="w-100 d-flex flex-column">
          <p>Selfie con documento</p>
          <v-btn outlined>Scatta</v-btn>
          <v-file-input
            class="mt-4"
            label="ALLEGA"
            truncate-length="15"
            v-model="form.selfie"
          ></v-file-input>
          <!-- <v-btn class="mt-4" outlined>Allega</v-btn> -->
        </v-form>
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
      selfie: null,
    },
  }),
};
</script>