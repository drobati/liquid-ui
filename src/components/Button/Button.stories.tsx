import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';

import {Button} from './Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Liquid UI/Button',
    component: Button,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        color: {control: {type: 'color'}},
    },
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} >Button</Button>;

export const Default = Template.bind({});// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {};

export const AllColors: ComponentStory<typeof Button> = () => (
    <div className="inline-flex space-x-4 flex-row">
        <Button color="#D16BA5"/>
        <Button color="CadetBlue"/>
        <Button color="rgb(233, 150, 122)"/>
    </div>
);

export const Color = Template.bind({});// More on args: https://storybook.js.org/docs/react/writing-stories/args
Color.args = {
    color: "#a67d00"
};

export const ExtraSmall = Template.bind({});
ExtraSmall.args = {
    size: 'xs',
};

export const Small = Template.bind({});
Small.args = {
    size: 'sm',
};

export const Medium = Template.bind({});
Medium.args = {
    size: 'md',
};

export const Large = Template.bind({});
Large.args = {
    size: 'lg',
};

export const ExtraLarge = Template.bind({});
ExtraLarge.args = {
    size: 'xl',
};

export const Solid = Template.bind({});
Solid.args = {
    variant: 'solid',
};

export const Outline = Template.bind({});
Outline.args = {
    variant: 'outline',
};

export const Ghost = Template.bind({});
Ghost.args = {
    variant: 'ghost',
};

export const Link = Template.bind({});
Link.args = {
    variant: 'link',
};
