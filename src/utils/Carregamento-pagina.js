// Carregamento-pagina.js
const lighthouse = require('lighthouse');
const chromeLauncher = require('chrome-launcher');

export async function obterTempoCarregamento(url) {
  try {
    const chrome = await chromeLauncher.launch({ chromeFlags: ['--headless'] });
    const options = { logLevel: 'info', output: 'json', onlyCategories: ['performance'], port: chrome.port };
    const runnerResult = await lighthouse(url, options);
    await chrome.kill();

    // Acesse as métricas de desempenho, neste exemplo, estamos pegando o tempo total de carregamento (TTI)
    const tti = runnerResult.lhr.audits.interactive.numericValue;

    return tti;
  } catch (error) {
    console.error(`Erro ao obter tempo de carregamento: ${error}`);
    throw error;
  }
}

