import React from 'react'

import appLogo from '../images/ram.png'

import appleStoreBadge from '../images/apple.png'
import googlePlayBadge from '../images/google.png'

import coverImage from '../images/Untitled_Artwork.png'


export const initialState = {
    // when in dev, change appURL to local url
    // appURL: 'http://localhost:3000',  
    // when in production, change appURL to real url
    appURL: 'https://ramroutes.web.app',

    appLogo: appLogo,
    appName: 'RamRoutes',

    coverTitle: 'Discover the Magic of Campus',
    coverText: 'Join RamRoutes and connect with your campus community!',
    appleStoreBadge: appleStoreBadge,
    appleStoreLink: 'https://apps.apple.com/us/app/ramroutes/id6749616671',
    googlePlayBadge: googlePlayBadge,
    // googlePlayLink: 'https://play.google.com/store/apps/details?id=com.edgoanalytics.ramroutes',

    coverImage: coverImage,

    // endorsementTitle: `Hangout with your favorite people on your favorite apps`,
    // endorsementText: `AmpliChat powers conversations within DreamHub, VoiceQnA, VoiceMirror, BaZiPaiPai, and SpindriftHome.`,
    endorsementList: [
        // {
        //     title: `DreamHub: Visualized Stories`,
        //     titleColor: `orangeRed`,
        //     image: dreamhub_filled,
        //     URL: `https://dreamhub.app`,
        // },
        // {
        //     title: `VoiceQnA: Speak a New Language`,
        //     titleColor: `forestGreen`,
        //     image: voiceqna_filled,
        //     URL: `https://voiceqna.com`,
        // },
        // {
        //     title: `VoiceMirror: Travel Translator`,
        //     titleColor: `blue`,
        //     image: voicemirror_filled,
        //     URL: `https://voiceqna.com/mirror`,
        // },
        // {
        //     title: `BaZiPaiPai: Know Your Destiny`,
        //     titleColor: `black`,
        //     image: bazipaipai_unfilled,
        //     URL: `https://bazipaipai.com`,
        // },
        // {
        //     title: `SpindriftHome: HOA Management`,
        //     titleColor: `orangeRed`,
        //     image: spindrifthome_filled,
        //     URL: `https://spindrifthome.com`,
        // },
    ],

    sectionList: [
        // {
        //     'title': `Event Networking Made Easy`,
        //     'text': `Tired of shouting over the music to talk to your friends at concerts and events? Our app makes it easy to chat with others in real-time, so you can enjoy the experience without missing out on socializing.`,
        //     'image': guitar,
        // },
        // {
        //     'title': `Expand Your Event Community`,
        //     'text': `Meet like-minded people and share your excitement for the latest events and concerts.`,
        //     'image': event_phones,
        // },
        // {
        //     'title': `Enhance Event Experience`,
        //     'text': `Get instant access to a community of passionate event and concert-goers with our app! Chat with others before, during, and after the event to enhance your experience and create memories that last a lifetime.`,
        //     'image': foggy_blue,
        // },
        // {
        //     'title': `Chat with Attendees`,
        //     'text': `Don't let social anxiety get in the way of enjoying your favorite events and concerts! With our app, you can chat with others and make new friends in a safe, welcoming environment.`,
        //     'image': purple_phones,
        // },
        // {
        //     'title': `Discover New Events and Friends`,
        //     'text': `Our app is the perfect way to enhance your experience at events and concerts! Connect with others, share your thoughts and opinions, and discover new artists and events to love.`,
        //     'image': purple_light,
        // },
        // {
        //     'title': `Connect with Concert Fans`,
        //     'text': `Whether you're a seasoned concert-goer or a first-time attendee, our app is the perfect way to connect with others and make the most of your experience. Download now and start chatting!`,
        //     'image': concert_classic,
        // },
    ],

    featuresSection: {
        title: 'Why Get RamRoutes?',
        subtitle: 'Discover what makes campus life extraordinary',
        features: [
            {
                icon: '🗺️',
                title: 'Join the Quest!',
                description: 'Reunite the ram with his lover, Aros, in a journey of discovery and enlightenment',
                backgroundColor: '#e6f3ff'
                
            },
            {
                icon: '🤝',
                title: 'Explore Campus',
                description: 'Unlock new buildings and locations as you explore campus and discover hidden gems',
                backgroundColor: '#f0f8e6'
            },
            {
                icon: '📅',
                title: 'Campus Events',
                description: 'Never miss out on what\'s happening around campus. Get push notifications for events and activiities',
                backgroundColor: '#fff0e6'
            }
        ]
    },

    // discordImage: discordImage,
    // discordLink: 'https://discord.com/invite/aFQPYyAVDq',
}

const initialContext = {
    state: initialState,
    dispatch: () => null,
}

export const Context = React.createContext(initialContext)
