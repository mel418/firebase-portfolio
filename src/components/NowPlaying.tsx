'use client';

import Image from 'next/image';
import { SiSpotify } from '@icons-pack/react-simple-icons';
import { Skeleton } from '@/components/ui/skeleton';

type Song = {
  isPlaying: boolean;
  title?: string;
  artist?: string;
  album?: string;
  albumImageUrl?: string;
  songUrl?: string;
};

export function NowPlaying({ song }: { song: Song }) {
  return (
    <a
      href={song?.songUrl || 'https://open.spotify.com'}
      target="_blank"
      rel="noopener noreferrer"
      className="mt-4 block"
    >
      <div className="flex items-center gap-4 rounded-lg border bg-card p-3 transition-colors hover:bg-accent">
        <div className="relative h-16 w-16">
          {song?.albumImageUrl ? (
            <Image
              src={song.albumImageUrl}
              alt={song.album || 'Spotify album art'}
              fill
              className="rounded-md object-cover"
              sizes="64px"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center rounded-md bg-muted">
              <SiSpotify className="h-8 w-8 text-muted-foreground" />
            </div>
          )}
        </div>
        <div className="flex min-w-0 flex-1 flex-col">
          <p className="truncate font-semibold text-sm">
            {song?.isPlaying ? song.title : 'Not playing'}
          </p>
          <p className="truncate text-xs text-muted-foreground">
            {song?.isPlaying ? song.artist : 'Spotify'}
          </p>
        </div>
        <SiSpotify className="h-6 w-6 shrink-0" color={song?.isPlaying ? '#1DB954' : 'currentColor'} />
      </div>
    </a>
  );
}

export function NowPlayingSkeleton() {
  return (
     <div className="mt-4 block">
      <div className="flex items-center gap-4 rounded-lg border bg-card p-3">
         <Skeleton className="h-16 w-16 rounded-md" />
        <div className="flex min-w-0 flex-1 flex-col gap-2">
            <Skeleton className="h-4 w-3/4" />
            <Skeleton className="h-3 w-1/2" />
        </div>
        <Skeleton className="h-6 w-6 rounded-full" />
      </div>
    </div>
  )
}
