import { ref, watch } from "vue";

export const useModal = () => {
  const visible = ref(false);
  const emit = defineEmits(["onVisible", "onDismiss"]);

  watch(visible, (v) => {
    emit(v ? "onVisible" : "onDismiss", undefined);
  });

  return visible;
};
