Wrap every piece of terrain imagery in this; it enforces 0px corners, the gradient scrim and mono annotation placement.

```jsx
<TerrainFrame src="assets/hero-terrain-scan.png" ratio="21 / 9"
  coordinates="9.7382° N, 100.0136° E" caption="LiDAR + photogrammetry, 2025">
  <h1>Understand the land before you build.</h1>
</TerrainFrame>
```

Set `grid` only when the grid represents actual scan coverage.
