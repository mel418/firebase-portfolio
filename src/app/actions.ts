'use server';

import {
  generateCoverLetter as generateCoverLetterFlow,
  type GenerateCoverLetterInput,
} from '@/ai/flows/cover-letter-generator';
import { getNowPlaying } from '@/lib/spotify';

// export async function generateCoverLetter(input: GenerateCoverLetterInput) {
//   try {
//     const result = await generateCoverLetterFlow(input);
//     return { success: true, data: result };
//   } catch (error) {
//     console.error('Cover letter generation failed:', error);
//     // It's better to return a generic error message to the user
//     return { success: false, error: 'An unexpected error occurred while generating the cover letter. Please try again.' };
//   }
// }

export async function getNowPlayingAction() {
  try {
    const song = await getNowPlaying();
    return { success: true, data: song };
  } catch (error) {
    console.error('Failed to get now playing song:', error);
    return { success: false, error: 'Failed to fetch currently playing song.' };
  }
}
