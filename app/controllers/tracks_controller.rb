class TracksController < ApplicationController
  def create
    @track = Track.new(track_params)

    if @track.save
      render json: @track
    else
      render json: @track.errors.full_messages, status: 404
    end
  end

  def index
    @tracks = Track.all

    render json: @tracks
  end

  def destroy
  end

  private
  def track_params
    params.require(:track).permit(:name, :roll)
  end
end
