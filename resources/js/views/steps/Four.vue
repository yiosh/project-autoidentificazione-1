<template>
  <step title="VERIFICA E-MAIL" number="4" buttonText="PROCEDI" goTo="StepFive">
    <v-row>
      <v-col cols="12" class="d-flex justify-center align-center">
        <v-icon color="success" size="150">mdi-check</v-icon>
      </v-col>
      <v-col cols="12" class="d-flex align-center">
        <p class="text-center mx-auto">
          Il tuo indirizzo e-mail è stato verificato con successo
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
};
</script>