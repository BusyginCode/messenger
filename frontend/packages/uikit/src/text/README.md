SASS

```scss
@import "../theme/variables";

.text {
  font-size: $font-size-base;
  line-height: 2;

  &.info {
    color: $color-gray;
  }

  &.warning {
    color: $color-info;
  }

  &.danger {
    color: $color-error;
  }

  &.success {
    color: $color-success;
  }
}

.small {
  font-size: $font-size-sm;
  line-height: $font-size-base;
}

.left {
  text-align: left;
}

.right {
  text-align: right;
}

.center {
  text-align: center;
}

.capitalize {
  text-transform: capitalize;
}

.lowercase {
  text-transform: lowercase;
}

.uppercase {
  text-transform: uppercase;
}

```
