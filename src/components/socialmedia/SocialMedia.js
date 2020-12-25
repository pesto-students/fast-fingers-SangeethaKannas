import React from 'react';
import { FontAwesome } from '../common/commoncomponents';
import { SocialMediaWrapper, SocialMediaLink } from "./SocialMediaStyles";

const SocialMedia = React.memo(() => {
  const url = `https://fastfingers-by-sangeeth.netlify.app/`;
  const appName = 'Fast Fingers';

  const links = [
    {
      url: `https://www.facebook.com/sharer/sharer.php` ,
      iconName: 'facebook',
      bgColor: '#3a5795',
      params: {
        u: url
      }
    },
    {
      url: `https://www.linkedin.com/shareArticle`,
      iconName: 'linkedin',
      bgColor: '#0177b5',
      params: {
       mini: true,
       url : url,
       title: appName,
       summary: 'Fast Fingers - Ultimate Typing Game',
       source: appName
      }
    },
    {
      url: `https://twitter.com/intent/tweet`,
      iconName: 'twitter',
      bgColor: '#55acee',
      params:{
        url : url,
        text: appName,
        hashtags: 'fast-fingers, typing-game, game, highestscore, done'
      }
    }
    // ,
    // {
    //   url: 'https://www.pinterest.com/pin/create/button/',
    //   iconName: 'pinterest-p',
    //   bgColor: '#bd081c',
    //   params: {
    //     media: 'image',
    //     description: 'Hi'
    //   }
    // }
  ];

  const getUrl = (url, params = {}) => {
    const keys = Object.keys(params);
    const queryStringAppender = (queryStr, key) =>
      queryStr + (queryStr !== '?' ? '&' : '') + key + '=' + encodeURIComponent(params[key]);

    return url + keys.reduce(queryStringAppender,  (keys.length > 0 ? '?' : ''))
  }

  return (
    <SocialMediaWrapper> {
      links.map((link, index) => (
        <SocialMediaLink bgColor={link.bgColor} href={getUrl(link.url, link.params)} rel="noopener noreferrer" target="_blank">
          <FontAwesome className={link.iconName} color={'white'}/>
        </SocialMediaLink>
      ))
    }
    </SocialMediaWrapper>
    )
});

export default SocialMedia;