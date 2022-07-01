import { ref } from "vue";

const visible = ref(true);

export function userLoginModal() {
  function toggle() {
    visible.value = true;
  }

  return { visible, toggle };
}
