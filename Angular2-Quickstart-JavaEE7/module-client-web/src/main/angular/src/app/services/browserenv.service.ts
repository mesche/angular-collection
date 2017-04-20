import {Injectable} from '@angular/core';

@Injectable()
export class BrowserEnvService {
  /**
   * Returns the current browser window instance.
   *
   * At the moment this is workaround of the problem with @Inject(Window) and aot
   * {provide: Window, useValue: window}
   *  @Inject(Window) private _window: Window
   */
  public get nativeWindow(): Window {
    return window;
  }

  /**
   * Get the complete domain name with protocol, hostname and port if available.
   */
  public getBaseURL(): string {
    const _window: Window = this.nativeWindow;
    const port: string = (_window.location.port ? ':' + _window.location.port : '');
    const baseURL = `${_window.location.protocol}//${_window.location.hostname}${port}`;
    return baseURL;
  }
}
