<template>
    <step
        title="CONFERMA DOCUMENTO"
        number="9"
        buttonText="PROCEDI"
        goTo="StepTen"
        :isDisabled="isDisabled"
        :payload="form"
    >
        <v-row>
            <v-col cols="12" md="5" class="d-flex justify-center align-center">
                <v-icon :size="$vuetify.breakpoint.smAndDown ? 80 : 150"
                    >mdi-camera</v-icon
                >
            </v-col>
            <v-col cols="12" md="7" class="d-flexalign-center">
                <v-form v-model="valid" class="w-100 d-flex flex-column">
                    <p>
                        Scatta un Selfie con in mano il tuo documento, per
                        confirmare la tua identittà
                    </p>
                    <v-file-input
                        v-if="$vuetify.breakpoint.mdAndDown"
                        label="SCATTA"
                        outlined
                        dense
                        capture="camera"
                        accept="image/*"
                        v-model="form.selfie"
                    ></v-file-input>
                    <!-- <v-btn outlined>Scatta</v-btn> -->
                    <v-file-input
                        :rules="fileSize"
                        accept="image/png, image/jpeg, application/pdf"
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
        Step
    },
    data: () => ({
        valid: true,
        fileSize: [
            value =>
                !value ||
                value.size < 5000000 ||
                "La dimensione del file dovrebbe essere inferiore a 5 MB!"
        ],
        form: {
            selfie: null
        }
    }),
    computed: {
        isDisabled() {
            if (this.form.selfie && this.valid) {
                return false;
            }
            return true;
        }
    }
};
</script>
