document.addEventListener('DOMContentLoaded', async () => {
  var apikey = document.getElementById('apikey');
  var baseurl = document.getElementById('baseurl');
  var provider = document.getElementById('providers-select');
  
  chrome.storage.local.get(['apikey'], (result) => {
    if (result && result.key) {
      apikey.value = result.key
    }
  })

  chrome.storage.local.get(['url'], (result) => {
    if (result && result.key) {
      baseurl.value = result.key
    }
  })

  chrome.storage.local.get(['provider'], (result) => {
    if (result && result.key) {
      provider.value = result.key
    }
  })

  apikey.style.display = 'none';
  baseurl.style.display = 'none';
  provider.style.display = 'block';

  apikey.addEventListener('change', () => {
    chrome.storage.local.set({
      apikey: apikey.value,
    }) 
  })

  baseurl.addEventListener('change', () => {
    chrome.storage.local.set({
      baseurl: baseurl.value,
    }) 
  })

  provider.addEventListener('change', () => {
    chrome.storage.local.set({
      provider: provider.value,
    })

    if (provider.value == 'openai-direct') {
      baseurl.style.display = 'none';
    } 
    else if (provider.value == 'ollama') {
      baseurl.style.display = 'block';
    }
  })

  document.getElementById('closeBtn').addEventListener('click', () => {
    window.close()
  })
})
