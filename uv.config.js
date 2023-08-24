/*global Ultraviolet*/
self.__uv$config = {
    prefix: '/service/',
    bare: 'https://tomp.app/',
    encodeUrl: Ultraviolet.codec.xor.encode,
    decodeUrl: Ultraviolet.codec.xor.decode,
    handler: 'https://unpkg.com/@titaniumnetwork-dev/ultraviolet@2.0.0/dist/uv.handler.js',
    client: 'https://unpkg.com/@titaniumnetwork-dev/ultraviolet@2.0.0/dist/uv.client.js',
    bundle: 'https://unpkg.com/@titaniumnetwork-dev/ultraviolet@2.0.0/dist/uv.bundle.js',
    config: 'uv.config.js',
    sw: 'https://unpkg.com/@titaniumnetwork-dev/ultraviolet@2.0.0/dist/uv.sw.js',
};