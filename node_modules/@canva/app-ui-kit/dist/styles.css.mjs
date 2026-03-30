// Dynamically import the appropriate styles based on the dir attribute of the document.
// This ensures that the correct styles (LTR for 'left-to-right' or RTL for 'right-to-left')
// are applied according to the user's language direction setting.
const direction = document.documentElement.getAttribute('dir');
if (direction === 'rtl') {
  import('@canva/app-ui-kit/styles.rtl.css');
} else {
  import('@canva/app-ui-kit/styles.ltr.css');
}
