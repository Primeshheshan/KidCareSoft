import { Controller, Get, Post, Req, Res, UseGuards } from '@nestjs/common';
import { Request, Response } from 'express';
import { AuthService } from './auth.service';
import { AccessTokenGuard } from './guards/accessToken.guard';
import { RefreshTokenCookieGuard } from './guards/refreshTokenCookie.guard';

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  /*   @Post('signup')
    async signUp(@Req() req: Request): Promise<any> {
      return this.authService.signUp(req.body);
    }
  
    @Post('login')
    async signIn(@Req() req: Request) {
      return this.authService.signIn(req.body);
    }
    
   @UseGuards(RefreshTokenGuard)
  @Get('refresh')
  async refreshTokens(
    @Req() req: Request,
    @Res({ passthrough: true }) res: Response,
  ) {
    const email = req.user['email'];
    const refreshToken = req.user['refreshToken'];
    return await this.authService.refreshToken(email, refreshToken);    
  } */

  ///////////////////// send cookies /////////////////////
  @Post('signup')
  async signUp(@Req() req: Request, @Res({ passthrough: true }) res: Response) {
    const { refresh_token, access_token } = await this.authService.signUp(
      req.body,
    );
    res.cookie('refresh-token', refresh_token, {
      httpOnly: true,
    });
    return { access_token };
  }

  @Post('login')
  async signIn(@Req() req: Request, @Res({ passthrough: true }) res: Response) {
    const { refresh_token, access_token } = await this.authService.signIn(
      req.body,
    );
    res.cookie('refresh-token', refresh_token, {
      httpOnly: true,
    });
    return { access_token };
  }

  @UseGuards(RefreshTokenCookieGuard)
  @Get('logout')
  async logOut(@Req() req: Request, @Res({ passthrough: true }) res: Response) {
    this.authService.logOut(req.user['email']);
    res.clearCookie('refresh-token');
    return { successMsg: 'successfully logout' };
  }

  @UseGuards(RefreshTokenCookieGuard)
  @Get('refresh')
  async refreshTokens(
    @Req() req: Request,
    @Res({ passthrough: true }) res: Response,
  ) {
    const email = req.user['email'];
    const refreshToken = req.user['refreshToken'];
    const { refresh_token, access_token } = await this.authService.refreshToken(
      email,
      refreshToken,
    );

    res.cookie('refresh-token', refresh_token, {
      httpOnly: true,
    });
    return { access_token };
  }

  @Get('movies')
  @UseGuards(AccessTokenGuard)
  async movies() {
    return ['Avatar', 'Avengers'];
  }
}
