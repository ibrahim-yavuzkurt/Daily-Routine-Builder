# Lucy

Geliştirme aşamasındaki, herkese açık bir plan aracı. Electron, React ve SQLite ile çalışır. Görevler, takvim ve sohbet bu bilgisayarda kalır.

Repoda API anahtarı, sohbet yedeği ve kişisel veri yoktur. Herkes kendi anahtarını kendisi girer.

## Çalıştırma

```bash
npm install
npm run dev
```

## Kendi anahtarın

Lucy açılınca Ayarlar’dan **Gemini API anahtarı** alanına kendi anahtarını yapıştır. Anahtarı [Google AI Studio](https://aistudio.google.com/apikey) üzerinden alırsın. Yalnızca bu bilgisayarda saklanır.

İsteğe bağlı alanlar da aynı ekrandadır:

- Claude kullanacaksan Anthropic anahtarı
- Whisper kullanacaksan OpenAI anahtarı
- YouTube oynatma listesi için YouTube Data API anahtarı (boşsa Gemini anahtarın kullanılır)

Anahtarı dosyada tutmak istersen `.env.example` dosyasını `.env` yapıp yalnızca kendi makinen için doldur. `.env` repoya eklenmez.

## Repoya girmemesi gerekenler

- `.env`
- `lucy_yedek` (sohbet yedeği)
- `dist` ve `out` (derlenmiş uygulama)

Global kısayol: `Ctrl+Shift+Space`
