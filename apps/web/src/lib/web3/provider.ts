/**
 * Web3 provider (frontend).
 *
 * Regra do projeto:
 * - Tudo que usa `window.ethereum` é CLIENT-ONLY.
 * - Portanto, quem importar isso deve estar num arquivo com `"use client"`.
 *
 * Motivo: no Next, código pode rodar no servidor (SSR). No servidor não existe `window`.
 */

import {BrowserProvider} from "ethers";

declare global {
    interface Window {
        ethereum?: any; // Tipagem simples agora. Mais tarde refinamos.
    }
}

/**
 * Retorna true se existir uma carteira injetada no navegador (MetaMask, Brave Wallet etc.).
 */
export function hasInjectedWallet(): boolean {
    return typeof window !== "undefined" && !!window.ethereum;
}

/**
 * Cria o provider do ethers a partir da carteira injetada.
 * Isso NÃO pede permissão ainda. Só cria o "canal" de comunicação.
 */
export function getBrowserProvider(): BrowserProvider {
    if (!hasInjectedWallet()) {
        throw new Error("Nenhuma carteira encontrada (instale MetaMask ou use Brave Wallet).");
    }
    return new BrowserProvider(window.ethereum);
}
