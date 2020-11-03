<template>
    <step
        title="VERIFICA NUMERO DI TELEFONO"
        number="7"
        buttonText="PROCEDI"
        goTo="StepEight"
    >
        <v-row>
            <v-col cols="12" class="d-flex justify-center align-center">
                <v-icon
                    color="success"
                    :size="$vuetify.breakpoint.smAndDown ? 80 : 150"
                    >mdi-check</v-icon
                >
            </v-col>
            <v-col cols="12" class="d-flex align-center">
                <p class="text-center mx-auto">
                    Il tuo numero di telefono è stato verificato con successo
                </p>
            </v-col>
        </v-row>
    </step>
</template>

<script>
import Step from "../../components/Step";
export default {
    components: {
        Step
    }
};
</script>
