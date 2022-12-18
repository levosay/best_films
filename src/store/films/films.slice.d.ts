import { Film, FilmSearchByFiltersResponse } from 'api/models'
import { Nullable, TLoadStatuses } from 'types'

export interface IFilmsState {
  films: Nullable<FilmSearchByFiltersResponse>
  detailed: Nullable<Film>
  isError: null
  isContentLoad: TLoadStatuses
}
