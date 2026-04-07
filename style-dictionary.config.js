import StyleDictionary from 'style-dictionary';

const sd = new StyleDictionary({
  source: ['tokens/tokens.json'],
  platforms: {
    css: {
      transformGroup: 'css',
      prefix: 'twig',
      buildPath: 'src/tokens/',
      files: [
        {
          destination: 'tokens.css',
          format: 'css/variables',
          options: {
            selector: ':root',
            outputReferences: false
          }
        }
      ]
    },
    js: {
      transformGroup: 'js',
      buildPath: 'src/tokens/',
      files: [
        {
          destination: 'tokens.js',
          format: 'javascript/es6'
        }
      ]
    }
  }
});

sd.buildAllPlatforms();
