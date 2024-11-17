import * as React from 'react';
import Typography from '@mui/material/Typography';
import { CardContent, Divider } from '@mui/material';
import Card from '@mui/joy/Card';
import { CardOverflow } from '@mui/joy';
import AspectRatio from '@mui/joy/AspectRatio';

export default function MyTree() {
  return (
    <>
      <section className="h-40 w-full bg-green-600 flex justify-center items-center">
        <Typography variant="h4" className="font-bold text-zinc-50">
          #PlantForSelf
        </Typography>
      </section>

      <section className="mt-10 mb-10 grid md:grid-cols-2 sm:grid-cols-2 grid-cols-1">
        {/* Scrollable Project Cards Section */}
        <div className="overflow-y-auto" style={{ height: '400px' }}>
          <div className="grid grid-cols-1 gap-4">
            {[...Array(6)].map((_, index) => (
              <Project_Card key={index} />
            ))}
          </div>
        </div>

        {/* Static Image Section */}
        <div className="mt-10 mb-10">
          <img
            src="https://developers.google.com/static/maps/images/landing/hero_maps_static_api.png"
            loading="lazy"
            alt="Static Map"
          />
        </div>
      </section>
    </>
  );
}

function Project_Card() {
  return (
    <Card orientation="horizontal" className="m-2">
      <CardOverflow className="h-full w-full">
        <img
          src="/exampleCard.png"
          loading="lazy"
          alt="Project Thumbnail"
        />
      </CardOverflow>

      <CardContent>
        <Typography variant="h6">Yosemite National Park</Typography>
        <Typography
          variant="body1"
          sx={{
            display: '-webkit-box',
            overflow: 'hidden',
            WebkitBoxOrient: 'vertical',
            WebkitLineClamp: 3,
          }}
        >
          This article shares my experience in migrating from MUI v4 to v5. It was quite straightforward, much like enjoying a cup of coffee.
        </Typography>
      </CardContent>

      <CardOverflow variant="soft">
        <div className="grid grid-cols-2">
          <div className="pl-6">
            <Typography variant="body2" color="text.secondary">
              6.3k Joined
            </Typography>
            <Typography variant="body2" color="text.secondary">
              #PlantForSelf
            </Typography>
          </div>
          <div className="ml-10">
            <a
              href="/joinProject"
              className="mt-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2"
            >
              Join Project
            </a>
          </div>
        </div>
      </CardOverflow>
    </Card>
  );
}
