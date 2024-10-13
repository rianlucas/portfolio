import { ref } from 'vue';

// Estado reativo global para armazenar o link ativo
export const activeLink = ref<string>("");

// Função para definir o link ativo
export function setActiveLink(link: string) {
  activeLink.value = link;
}

// Função para verificar se o link está ativo
export function isActiveLink(link: string) {
  return activeLink.value === link;
}