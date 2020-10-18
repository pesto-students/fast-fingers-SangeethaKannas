export class BaseTheme {
  spacing = (...args) => {
    const sizes = [0, 4, 8, 16, 32, 64];
    let pxs = [];

    args.forEach(idx => {
      if (sizes[idx] !== undefined) {
        pxs.push(`${sizes[idx]}px`);
      } else if (typeof idx === 'string') {
        pxs.push(idx);
      }
    });

    return pxs.join(' ');
  };

}

