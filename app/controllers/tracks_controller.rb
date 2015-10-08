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
  end

  def destroy
  end
end
