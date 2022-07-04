import { ref } from "vue";

const visible = ref(false);

export function userLoginModal() {
  function toggle() {
    visible.value = true;
  }

  return { visible, toggle };
}
