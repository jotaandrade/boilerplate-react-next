import { Meta, StoryObj } from '@storybook/react'

import Main from '.'

export default {
  title: 'Main',
  component: Main,
  parameters: {
    layout: 'fullscreen'
  }
} as Meta

export const Default: StoryObj = {
  args: {
    title: 'efy.ai',
    description: 'Plataforma de Recursos Humanos com IA'
  }
}

export const Basic: StoryObj = {
  args: {
    title: 'efy.ai',
    description: 'Plataforma de Recursos Humanos com IA'
  }
}
