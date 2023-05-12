import emitter from '@/methods/emitter';

export default function pushMessageState(response, title = '更新') {
  if (response.data.success) {
    emitter.emit('push-message', {
      style: 'success',
      title: `${title}成功`,
    });
  } else {
    emitter.emit('push-message', {
      style: 'danger',
      title: `${title}失敗`,
      content: response.data.message.join('、'),
    });
  }
}
