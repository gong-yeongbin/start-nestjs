import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { Movie } from './entities/movie.entity';

@Injectable()
export class MoviesService {
  private mv: Movie[] = [];

  constructor(
    @InjectRepository(Movie)
    private readonly movieRepository: Repository<Movie>,
  ) {}

  // getAll(): Movie[] {
  //   return this.mv;
  // }

  // getOne(id: number): Movie {
  //   const movie = this.mv.find((movie) => movie.id === id);
  //   if (!movie) {
  //     throw new NotFoundException(`Movie with ID ${id} not found`);
  //   }
  //   return movie;
  // }

  // deleteOne(id: number) {
  //   this.getOne(id);
  //   this.mv = this.mv.filter((movie) => movie.id !== id);
  // }

  // create(movieData: CreateMovieDto) {
  //   this.mv.push({
  //     id: this.mv.length + 1,
  //     ...movieData,
  //   });
  // }

  // update(id: number, updateData: UpdateMovieDto) {
  //   const movie = this.getOne(id);
  //   this.deleteOne(id);
  //   this.mv.push({ ...movie, ...updateData });
  // }

  dbtest(): Promise<Movie[]> {
    return this.movieRepository.find();
  }
}
