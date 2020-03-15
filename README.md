# mofron-event-hover
[mofron](https://mofron.github.io/mofron/) is module based frontend framework.

hover event for mofron

this event notifies when the mouse is hovered or outed on the component.

## event function parameter

- component: event target component object

- event: "click" event object by addEventListener

- mixed: user specified parameter


# Install
```
npm install mofron mofron-event-hover
```

# Sample
```html
<require>
    <tag load="mofron-comp-frame">Frame</tag>
    <tag load="mofron-event-hover">Hover</tag>
</require>

<script run=init>
let evt = (e1,e2,e3) => {
    console.log(e2);
}
</script>

<Frame event=Hover:@evt>
</Frame>
```

# Parameter

| Short<br>Form | Parameter Name | Type | Description |
|:-------------:|:---------------|:-----|:------------|
| | status | boolean | hover status |

