import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

@Controller('movies')
export class MoviesController {
  @Get()
  getAll() {
    return 'this will return all movies';
  }

  @Get('/:id')
  getOne(@Param('id') movieId: string) {
    return 'This will ruturn one movie' + movieId;
  }

  @Post()
  create(@Body() movieData) {
    console.log(movieData);
    return 'This will create a moive';
  }
  @Delete(':/id')
  remove(@Param('id') movieId: string) {
    return 'This will delete a movie' + movieId;
  }
  @Patch(':/id')
  patch(@Param('id') movieId: string) {
    return 'This will patch a movie' + movieId;
  }
}
