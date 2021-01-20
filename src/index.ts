// console.log('hi.');

export type Text = { type: 'text', text: string }
export type Image = { type: 'image', url: string }
export type Message = Text | Image;

export type RichMenuLink = { type: 'action' }
export type RichMenuCreate = { type: 'action' }
export type Action = RichMenuLink | RichMenuCreate

export const MessageText = async (text: string): Promise<Text> => {
    return { type: 'text', text } as Text
}

export const MessageImage = async (url: string): Promise<Image> => {
    return { type: 'image', url } as Image
}
