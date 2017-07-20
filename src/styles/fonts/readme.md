# How to install fonts

We keep all base fonts in the /fonts folder, and process them using Transfonter, which transforms the fonts to WOFF2, WOFF, TTF, EOT, SVG etc as needed and also outputs the corresponding CSS file with all font-face declarations with graceful degradation set up.

To install a new font:

1. Add it to the /fonts folder root.
2. Go to https://transfonter.org/
3. Upload all fonts in the 'fonts' folder root.
4. Select all Formats.
5. Run the conversion and extract the resulting zip file into /fonts/out

App.tsx references the CSS file at /fonts/out/stylesheet.css already, so your new fonts should be ready to use.

This process handles all font conversions, graceful degradation and CSS declarations fast.
