import { Film, FilmSearchByFiltersResponse } from 'api/models'
import { TLoadStatuses, Nullable } from 'types'

export interface IFilmsState {
  films: Nullable<FilmSearchByFiltersResponse>
  detailed: Nullable<Film>
  isError: null
  isContentLoad: TLoadStatuses
  isGlobalLoad: TLoadStatuses
}
