SASS

```scss
@import "../theme/variables";

.input {
  width: 100%;
  height: $form-control-height;
  border-width: $form-control-border-width;
  border-style: $form-control-border-style;
  border-radius: $form-control-border-radius;
  background-color: $form-control-bg;
  padding: 0 $form-control-padding-horizontal;
  outline: none;

  &[disabled] {
    background: $form-control-bg-disabled;
  }
}

.default {
  border-color: $color-light-gray;
}

.default:focus:not([disabled]),
.default:active:not([disabled]) {
  border-color: $color-gray;
}

.success,
.success:focus:not([disabled]),
.success:active:not([disabled]) {
  border-color: $color-success;
}

.warning,
.warning:focus:not([disabled]),
.warning:active:not([disabled]) {
  border-color: $color-info;
}

.danger,
.danger:focus:not([disabled]),
.danger:active:not([disabled]) {
  border-color: $color-error;
}

```
