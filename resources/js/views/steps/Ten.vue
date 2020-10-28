<template>
    <step title="OPERAZIONE CONCLUSA" number="10">
        <v-row>
            <v-col cols="12" class="d-flex justify-center align-center">
                <v-icon color="success" size="150">mdi-check</v-icon>
            </v-col>
            <v-col cols="12" class="d-flex align-center">
                <p class="text-center mx-auto">
                    Complimenti! Il processo di autoidentificazione è stato
                    effettuato con successo. A breve riceverai una e-mail di
                    conferma.
                </p>
            </v-col>
            <v-col class="text-center">
                <v-btn href="https://online.betitaly.it/" color="success"
                    >Vai a BetItaly.it</v-btn
                >
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
