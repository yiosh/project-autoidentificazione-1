export const mixins = {
  setStep(action, payload, step) {
    this.$store.commit(action, payload);
    this.$store.push({ name: step })
  },
}