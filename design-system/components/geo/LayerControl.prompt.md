The viewer's left or right rail. Give every layer a plain-language `hint` — the audience is not GIS-trained.

```jsx
<LayerControl active={{contours:true}} onToggle={k=>…} groups={[
  { title:'Reality', layers:[{key:'imagery',label:'Aerial imagery',hint:'What the site looks like'}] },
  { title:'Measured', layers:[{key:'contours',label:'Contours',hint:'Height lines every 1 m',meta:'1 m'}] }
]} />
```
