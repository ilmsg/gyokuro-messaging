import { MessageText, MessageImage, Text, Image } from '../src';

test('text', async () => {
    const text = 'hi'
    const message: Text = await MessageText(text);
    expect(message.type).toEqual('text');
    expect(message.text).toEqual(text);
});

test('image', async () => {
    const url = 'https://cf.shopee.co.th/file/2deda906d4b0f4d04d7292a98bf7a43c';
    const message: Image = await MessageImage(url);
    expect(message.type).toEqual('image');
    expect(message.url).toEqual(url);
});

