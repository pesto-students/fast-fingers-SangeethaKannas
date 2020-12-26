import styled from 'styled-components';

// can be global styles
function baseStyles({ theme }) {
  return {
    color: theme.colors.bodyText.main,
    fontSize: theme.typography.body,
    fontFamily: theme.typography.fontFamily,
    boxSizing: 'border-box',
  };
}

function spacing({ spacing }) {
  if (!spacing) {
    return null;
  }

  let styles = {};

  // paddings
  const { p, px, py, pl, pr, pb, pt } = spacing;

  // margins
  const { m, mx, my, ml, mr, mb, mt } = spacing;

  // paddings
  if (px) {
    styles.paddingLeft = px;
    styles.paddingRight = px;
  }

  if (py) {
    styles.paddingTop = py;
    styles.paddingBottom = py;
  }

  if (pl) {
    styles.paddingLeft = pl;
  }

  if (pr) {
    styles.paddingRight = pr;
  }

  if (pb) {
    styles.paddingBottom = pb;
  }

  if (pt) {
    styles.paddingTop = pt;
  }

  if (p) {
    styles.padding = p;
  }

  // margins
  if (mx) {
    styles.marginLeft = mx;
    styles.marginRight = mx;
  }

  if (my) {
    styles.marginTop = my;
    styles.marginBottom = my;
  }

  if (ml) {
    styles.marginLeft = ml;
  }

  if (mr) {
    styles.marginRight = mr;
  }

  if (mb) {
    styles.marginBottom = mb;
  }

  if (mt) {
    styles.marginTop = mt;
  }

  if (m) {
    styles.margin = m;
  }

  return styles;
}

function colors({ color, bg, hoverColor, hoverBg }) {
  let styles = '';
  if (color) {
    styles.color = color;
  }

  if (bg) {
    styles.backgroundColor = bg;
  }

  // hover
  if (hoverColor) {
    styles[':hover'] = {
      color: hoverColor,
    };
  }

  if (hoverBg) {
    styles[':hover'] = {
      ...styles[':hover'],
      backgroundColor: hoverBg,
    };
  }
  return styles;
}

function flex({ flex, justifyContent, alignItems, flexWrap }) {
  let styles = {};

  if (typeof flex === 'boolean' && flex) {
    styles.display = flex;
  } else if (flex) {
    styles.flex = flex;
  }

  if (justifyContent) {
    styles.justifyContent = justifyContent;
  }

  if (alignItems) {
    styles.alignItems = alignItems;
  }

  if (flexWrap) {
    styles.flexWrap = flexWrap;
  }

  return styles;
}

function textAlignment({ textAlign }) {
  return textAlign || null;
}

const BaseElement = styled.div(
  baseStyles,
  spacing,
  colors,
  flex,
  textAlignment,
);

export default BaseElement;