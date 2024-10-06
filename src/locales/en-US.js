export default {
  nav: {
    home: 'Home',
    download: 'Download',
    detail: 'Details',
    fqa: 'FAQ',
    sponsor: 'Sponsor',
  },
  baseInfo: {
    title1: 'Free & Open Source',
    title2: 'Offline & Built-in AI',
    desc: 'Xiaobin AI Background Removal Application, using the open-source model briaai/RMBG-1.4 to achieve image background removal. Supports single image drag-and-drop, image pasting, URL input, and batch background removal. Also supports the creation of various types of ID photos, single and batch image format conversion, as well as single and batch image compression.',
  },
  download: {
    title: 'Download',
    tips: 'Please save the data promptly to avoid link expiration.',
    baidu: 'Download from Baidu Cloud',
    quark: 'Download from Quark Cloud',
    uc: "Download from UC Cloud",
    github: 'Download from GitHub Releases',
  },
  detail: {
    matting: {
      title: 'AI Background Removal',
      desc: 'Offline, no registration required, completely free. Supports single and batch background removal, drag-and-drop, image pasting, and URL input. Supports jpg/png/gif/webp/bmp formats.',
      feature1: 'Open Source & Free',
      feature2: 'Supports Single and Batch Processing',
      feature3: 'Supports Multiple Formats',
    },
    certificate: {
      title: 'AI ID Photo',
      desc: 'Upload your personal photo, and use AI technology to automatically create an ID photo with a background.',
      feature1: 'Open Source & Free',
      feature2: 'Multiple Image Formats',
      feature3: 'Various ID Specifications',
    },
    convert: {
      title: 'Image Format Conversion',
      desc: 'Convert images to other formats. Simple and fast conversion, performed locally for data security.',
      feature1: 'Open Source & Free',
      feature2: 'Supports Single and Batch Processing',
      feature3: 'Supports Multiple Formats',
    },
    compress: {
      title: 'Image Compression',
      desc: 'Compress image size, reduce file size, and improve loading speed. Supports jpg/png/webp formats, single and batch processing. Requires configuration of TinyPNG API key.',
      feature1: 'Open Source & Free',
      feature2: 'Supports Single and Batch Processing',
      feature3: 'Supports Retry on Failure',
    },
  },
  fqa: {
    title: 'Frequently Asked Questions',
    fqas: [
      {
        question: 'Why use the Xiaobin AI Background Removal Application?',
        answer: 'The Xiaobin AI Background Removal Application uses the open-source model briaai/RMBG-1.4 to perform background removal. It supports single image drag-and-drop, image pasting, URL input, and batch processing. It also supports the creation of various types of ID photos, single and batch image format conversion.',
      },
      {
        question: 'How do I use the Xiaobin AI Background Removal Application?',
        answer: '1. Download and install the Xiaobin AI Background Removal Application.<br/>2. Open the application and click the "Single Background Removal" or "Batch Background Removal" button.<br/>3. Wait for the AI model to load.<br/>4. Click the "Save" button to save the image with the background removed.<br/>5. Click the "Exit" button to close the application.',
      },
      {
        question: 'How do I use the Xiaobin AI ID Photo Creator?',
        answer: '1. Download and install the Xiaobin AI ID Photo Creator.<br/>2. Open the application and click the "ID Photo" navigation button.<br/>3. Select the ID photo image and click the "Upload Photo" button.<br/>4. Choose the specifications.<br/>5. Adjust the specifications and press Enter to confirm.<br/>6. Choose the background and then save.<br/>7. Click the "Exit" button to close the application.',
      },
      {
        question: 'How do I use the Xiaobin AI Image Format Converter?',
        answer: '1. Download and install the Xiaobin AI Image Format Converter.<br/>2. Open the application and click the "Image Format Conversion" button.<br/>3. Select the image to be converted and click the "Convert" button.<br/>4. Choose the format to convert to and click the "Convert" button.<br/>5. Wait for the conversion to complete.<br/>6. Click the "Save" button to save the converted image.<br/>7. Click the "Exit" button to close the application.',
      },
      {
        question: 'How do I use the Xiaobin AI Image Compression?',
        answer: '1. Download and install the Xiaobin AI Image Compression.<br/>2. Open the application and click the "Image Compression" button.<br/>3. Select the image to be compressed and click the "Compress" button.<br/>4. Wait for the compression to complete.<br/>Note: You need to configure the TinyPNG API key. Apply here: https://tinypng.com/developers',
      },
      {
        question: 'What should I do if the client cannot start or shows a white screen on Windows?',
        answer: 'This project is developed using pywebview. On Windows, it will search for the EdgeChromium, EdgeHTML, and MSHTML client engines in sequence. If the local computer\'s Edge browser supports these engines, the client can start normally. Otherwise, you will need to install the corresponding <a style="color: blue; text-decoration: underline;" href="https://developer.microsoft.com/en-us/microsoft-edge/webview2/?form=MA13LH">Edge WebView2 Runtime browser engine</a>.'
      }
    ],
  },
  sponsor: {
    title: 'Sponsor',
    desc: 'If my project has been helpful to you, you can support me via WeChat. Thank you!',
  },
};
