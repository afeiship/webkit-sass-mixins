## grid:
> How to create a grid with mixins.

```scss
@mixin grid-item($inGridPrefix,$inValue, $inGridCount){
  $percent: percentage($inValue/$inGridCount);

  #{$inGridPrefix}-#{$inValue}{
    width: $percent;
  }

  #{$inGridPrefix}-offset-#{$inValue}{
    margin-left: $percent;
  }
}

@for $value from 1 through 24 {
    @include grid-item('.grid', $value, 24);
}
```
