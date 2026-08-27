Tabular technical information. Right-align every numeric column and put the unit in the header.

```jsx
<DataTable caption="Elevation summary" columns={[
  {key:'zone',label:'Zone'},{key:'min',label:'Min',unit:'m',align:'right'},{key:'max',label:'Max',unit:'m',align:'right'}
]} rows={[{zone:'North shoulder',min:'18.4',max:'46.2'}]} />
```
