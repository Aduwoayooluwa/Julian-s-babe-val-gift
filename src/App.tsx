import { Heart, BookOpen, Download } from 'lucide-react';
import GoodGirl from './assets/imgs/good_girl.jpg'
import MillionKisses from './assets/imgs/million_kisses.jpg'
import Adanna from './assets/imgs/Adanna.jpg'
import ArchersVoice from "./assets/imgs/Archer's Voice.jpg"
import Confess from './assets/imgs/Confess.jpg'
import FourthWing from './assets/imgs/Fourth Wing.jpg'
import HauntingAdeline from './assets/imgs/Haunting Adeline.jpg'
import Haven from './assets/imgs/Haven.jpg'
import Icebreaker from './assets/imgs/Icebreaker.jpg'
import IronFlame from './assets/imgs/Iron Flame.jpg'
import OnyxStorm from './assets/imgs/Onyx Storm.jpg'
import PickingDaisies from './assets/imgs/Picking Daisies on Sundays.jpg'
import RemindersOfHim from './assets/imgs/Reminders of Him.jpg'
import StayWithMe from './assets/imgs/Stay With Me.jpg'
import SteveAndMe from './assets/imgs/Steve & Me.jpg'
import BoneGarden from './assets/imgs/The Bone Garden.jpg'
import LoveHypothesis from './assets/imgs/The Love Hypothesis.jpg'
import MiddleDaughter from './assets/imgs/The Middle Daughter.jpg'
import SovereignLove1 from './assets/imgs/The One Who Knows Me.jpg'
import SovereignLove2 from './assets/imgs/The One who Loves Me.jpg'
import SovereignLove3 from './assets/imgs/The One Who Sees Me.jpg'
import SovereignLove4 from './assets/imgs/The One Who Holds Me.jpg'
import EvelynHugo from './assets/imgs/The Seven Husbands of Evelyn Hugo.jpg'
import SilentPatient from './assets/imgs/The Silent Patient.jpg'
import BloodQueen from './assets/imgs/Their Blood Queen.jpg'
import ThingsWeHide from './assets/imgs/Things We Hide from the Light.jpg'
import ThingsWeLeft from './assets/imgs/Things We Left Behind.jpg'
import ThingsWeNever from './assets/imgs/Things We Never Got Over.jpg'
import UglyLove from './assets/imgs/Ugly Love.jpg'
import Verity from './assets/imgs/Verity.jpg'
import WhenLoveVisits from './assets/imgs/When Love Visits.jpg'

interface Book {
  title: string;
  author: string;
  coverUrl: string;
  downloadUrl: string;
  description: string;
}

const books: Book[] = [
  {
    title: "A Good Girl's Guide to Murder",
    author: "Jackson, Holly.",
    coverUrl: GoodGirl,
    downloadUrl: "https://drive.google.com/file/d/1eNg5QdAmCZNUAPb7EhNoMbzsBRRP6zAR/view?usp=sharing",
    description: "A high school student reopens a closed murder case, uncovering shocking secrets and hidden truths."
  },
  {
    downloadUrl: "https://drive.google.com/file/d/17Hc_05mAtHx8oAaQZrKEG8gopAQVq75V/view?usp=sharing",
    coverUrl: MillionKisses,
    title: "A Million Kisses in Your Lifetime",
    author: "Monica Murphy",
    description: "A tender young romance set in a prep school, where forbidden desires ignite unexpected passion."
  },
  {
    downloadUrl: "https://drive.google.com/file/d/1dagaV_NGsHq1plqtrgbwELwsYv0K3THS/view?usp=sharing",
    coverUrl: Adanna,
    title: "Adanna",
    author: "Adesuwa O'man Nwokedi",
    description: "A poignant, transformative exploration of identity, resilience, and heritage as a woman rediscovers her roots."
  },
  {
    downloadUrl: "https://drive.google.com/file/d/1CVWenILLH_rCcly5dFHT50lRk2MYTOAv/view?usp=sharing",
    coverUrl: ArchersVoice,
    title: "Archer's Voice",
    author: " Mia Sheridan",
    description: "A mute man and troubled woman discover transformative love and healing in a small town."
  },
  {
    downloadUrl: "https://drive.google.com/file/d/1WDTgMkwxy2SKmCXgf94cE7W3wFaWgrUn/view?usp=sharing",
    coverUrl: Confess,
    title: "Confess",
    author: "Colleen Hoover",
    description: "A heart-wrenching contemporary romance where art, hidden secrets, and redemption intertwine to heal broken souls."
  },
  {
    downloadUrl: "https://drive.google.com/file/d/1kSIUqg8giZ8OAWX9SF4UbEjvvczy4d45/view?usp=sharing",
    coverUrl: FourthWing,
    title: "Fourth Wing {The Empyrean One}",
    author: "Rebecca Yarros",
    description: "A courageous young trainee defies odds and forges destiny to become a formidable dragon rider."
  },
  {
    downloadUrl: "https://drive.google.com/file/d/1NPfH7AEbDwlb201fDvVJ5dDWDy3Hhi6-/view?usp=sharing",
    coverUrl: HauntingAdeline,
    title: "Haunting Adeline",
    author: "H.D. Carlton",
    description: "A suspenseful gothic romance where dark, forbidden secrets and dangerous obsession haunt a troubled protagonist."
  },
  {
    downloadUrl: "https://drive.google.com/file/d/1G7NASogqGFg2bYO6BiB_TmlufnhPQPDj/view?usp=sharing",
    coverUrl: Haven,
    title: "Haven",
    author: "Timi Waters",
    description: "A heartwarming contemporary romance where unexpected, life-changing love and rare second chances transform shattered lives."
  },
  {
    downloadUrl: "https://drive.google.com/file/d/14dDCKGl7vrs5LPHTqv_mAXcNjrwIg-db/view?usp=sharing",
    coverUrl: Icebreaker,
    title: "Icebreaker",
    author: "Hannah Grace",
    description: "A refreshing contemporary romance where a serendipitous encounter breaks the ice between destined unlikely souls."
  },
  {
    downloadUrl: "https://drive.google.com/file/d/1ea0PgjE4JpZwHQixRrrQzcSAn7Gu0Ald/view?usp=sharing",
    coverUrl: IronFlame,
    title: "Iron Flame {The Empyrean Two}",
    author: "Rebecca Yarros",
    description: "Violet confronts perilous challenges and unexpected loyalties as her destiny ignites in a raging war."
  },
  {
    downloadUrl: "https://drive.google.com/file/d/1EW6NXU948CfGcZoP3aChaxfOXdy95kZz/view?usp=sharing",
    coverUrl: OnyxStorm,
    title: "Onyx Storm {The Empyrean Three}",
    author: "Rebecca Yarros",
    description: "Violet battles chaotic forces and turbulent alliances as her fate unravels amid epic war trials."
  },
  {
    downloadUrl: "https://drive.google.com/file/d/1x18BmuG6Kh27jrOWrmCqQuAmnfv491SH/view?usp=sharing",
    coverUrl: PickingDaisies,
    title: "Picking Daisies on Sundays",
    author: "Liana Cincotti",
    description: "A bittersweet, heartfelt tale of love, loss, and profound rediscovery unfolding during quiet Sunday moments."
  },
  {
    downloadUrl: "https://drive.google.com/file/d/1hMv8sHeosvB0_WHDIx9as6cxlQQ2SQ9i/view?usp=sharing",
    coverUrl: RemindersOfHim,
    title: "Reminders of Him",
    author: "Colleen Hoover",
    description: "A troubled man returns home, confronting haunting past mistakes and seeking redemption through heartfelt love."
  },
  {
    downloadUrl: "https://drive.google.com/file/d/10Weo9IKY3-AGecWWJPNRwldTWuAU5NhN/view?usp=sharing",
    coverUrl: StayWithMe,
    title: "Stay With Me",
    author: "Adebayo, Ayobami",
    description: "A poignant Nigerian marriage endures profound cultural pressures, heartache, and unexpected love amid societal expectations."
  },
  {
    downloadUrl: "https://drive.google.com/file/d/1NMVGpfemFlqr5IPeJXC06yp4RjSjkw9W/view?usp=sharing",
    coverUrl: SteveAndMe,
    title: "Steve & Me",
    author: "Terri Irwin",
    description: "A heartfelt, inspiring story of love, resilience, and deep connection between two very different individuals."
  },
  {
    downloadUrl: "https://drive.google.com/file/d/1a4ZoKuS2bTL3Us9zEr567IyVbE_GDv2x/view?usp=sharing",
    coverUrl: BoneGarden,
    title: "The Bone Garden",
    author: "Tess Gerritsen",
    description: "A chilling medical thriller revealing dark secrets and gruesome pasts hidden within a bone garden."
  },
  {
    downloadUrl: "https://drive.google.com/file/d/1-hwkJSx55tUUUMh9nRnpI1_1WARIwgb9/view?usp=sharing",
    coverUrl: LoveHypothesis,
    title: "The Love Hypothesis",
    author: "Hazelwood, Ali",
    description: "A witty academic romance where a fake, carefully orchestrated relationship blossoms into unexpected genuine love."
  },
  {
    downloadUrl: "https://drive.google.com/file/d/1JZ_yf3YGlCHTrr0PU0VavwbK3ov4BRJj/view?usp=sharing",
    coverUrl: MiddleDaughter,
    title: "The Middle Daughter",
    author: "Chika Unigwe",
    description: "A poignant family saga exploring identity, cultural heritage, and trials of being the middle daughter."
  },
  {
    downloadUrl: "https://drive.google.com/file/d/15XzXZ6m8tc-6QrgGFDVBj6XayywSTJoS/view?usp=sharing",
    coverUrl: SovereignLove1,
    title: "The One Who Knows Me - Sovereign Love Book One",
    author: "Joan Embola",
    description: "A passionate romance igniting forbidden desire, where secrets unravel and hearts entwine in sovereign love."
  },
  {
    downloadUrl: "https://drive.google.com/file/d/1amMPino25isz6CLZsA6_53iVidyH2yov/view?usp=sharing",
    coverUrl: SovereignLove2,
    title: "The One Who Loves Me - Sovereign Love Book Two",
    author: "Joan Embola",
    description: "A deeper journey of love and betrayal as secrets intensify in the sovereign love saga."
  },
  {
    downloadUrl: "https://drive.google.com/file/d/1bD8hnmGzbTMq4cKieZ_MlpWBmbfLGPFU/view?usp=sharing",
    coverUrl: SovereignLove3,
    title: "The One Who Sees Me - Sovereign Love Book Three",
    author: "Joan Embola",
    description: "A turbulent continuation where burning passion clashes with deceit, redefining love in the sovereign series."
  },
  {
    downloadUrl: "https://drive.google.com/file/d/1Rb8b9seQMoYtCCSJPLdsfp7ghLbaj7Sm/view?usp=sharing",
    coverUrl: SovereignLove4,
    title: "The One Who Holds Me - Sovereign Love Book Four",
    author: "Joan Embola",
    description: "A dramatic climax of the sovereign love series, where deep emotions and destiny finally converge."
  },
  {
    downloadUrl: "https://drive.google.com/file/d/1WwV8k610uupqMQFDSYig-ikOkY5zZRGU/view?usp=sharing",
    coverUrl: EvelynHugo,
    title: "The Seven Husbands of Evelyn Hugo",
    author: "Taylor Jenkins Reid",
    description: "A mesmerizing chronicle of Hollywood glamour, scandal, and the secret lives behind seven tumultuous marriages."
  },
  {
    downloadUrl: "https://drive.google.com/file/d/17ayBpPr-MkREr2PpJxKwC6bYinSS0HKt/view?usp=sharing",
    coverUrl: SilentPatient,
    title: "The Silent Patient",
    author: "Alex Michaelides",
    description: "A gripping psychological thriller where a silent patient’s dark secret unravels under relentless therapist scrutiny."
  },
  {
    downloadUrl: "https://drive.google.com/file/d/15g7GKgj6nLOBlXz8_J3v1jNFPPYqsKxx/view?usp=sharing",
    coverUrl: BloodQueen,
    title: "Their Blood Queen",
    author: "J.R. Thorn",
    description: "A dark fantasy epic where a ruthless queen wields blood magic to dominate a realm."
  },
  {
    downloadUrl: "https://drive.google.com/file/d/1VTT46s8mlUe5YObpkd36ZBvpsAcmLQyL/view?usp=sharing",
    coverUrl: ThingsWeHide,
    title: "Things We Hide from the Light (Knockemout Book 2)",
    author: " Lucy Score",
    description: "A suspenseful contemporary romance where hidden pasts and buried secrets ignite a dangerous love story."
  },
  {
    downloadUrl: "https://drive.google.com/file/d/1riiSmlqr2815GGimB8HpxJ7YDp8jHysu/view?usp=sharing",
    coverUrl: ThingsWeLeft,
    title: "Things we Left behind",
    author: "Lucy Score",
    description: "A tender romance exploring the lingering pain of loss and the hope found in healing."
  },
  {
    downloadUrl: "https://drive.google.com/file/d/1l2P6tiYP-1HZ9hxY3XZ2dQLmxtTK2PTb/view?usp=sharing",
    coverUrl: ThingsWeNever,
    title: "Things We Never Got Over ",
    author: "Lucy Score",
    description: "A raw, emotional romance where lingering grief and unresolved love fiercely challenge a broken heart."
  },
  {
    downloadUrl: "https://drive.google.com/file/d/1Sw2c5RHP0k2sMs_faXftij_MbHT1a1go/view?usp=sharing",
    coverUrl: UglyLove,
    title: "Ugly Love",
    author: "Colleen Hoover",
    description: "A raw, intense romance where passion battles pain and fragile hearts struggle to love fully."
  },
  {
    downloadUrl: "https://drive.google.com/file/d/17X1PCwuuw0LlKwZnm9yxPX1n_r-MSkGe/view?usp=sharing",
    coverUrl: Verity,
    title: "Verity",
    author: "Colleen Hoover",
    description: "A dark, twisty thriller where a writer uncovers disturbing secrets behind a famous author’s memoir."
  },
  {
    downloadUrl: "https://drive.google.com/file/d/1P3qxoR6T_fwXONmnc9t8hmppfTMPeFPM/view?usp=sharing",
    coverUrl: WhenLoveVisits,
    title: "When Love Visits",
    author: "Comfort Omovre",
    description: "A gentle, uplifting romance where unexpected love and heartfelt moments profoundly transform ordinary lives forever."
  }
];

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-rose-100">
      {/* Header */}
      <header className="py-8 text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Heart className="w-8 h-8 text-rose-500 animate-pulse" />
          <h1 className="text-4xl font-serif text-rose-800">Senami's Collection</h1>
          <Heart className="w-8 h-8 text-rose-500 animate-pulse" />
        </div>
        <p className="text-rose-600 italic">
        Once upon a time, there was a boy who loved a girl, and her laughter was a question he wanted to spend his whole life answering.
        </p>

      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {books.map((book, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="relative h-64">
                <img
                  src={book.coverUrl}
                  alt={book.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <div className="p-4 text-white">
                    <h3 className="text-xl font-semibold">{book.title}</h3>
                    <p className="text-sm opacity-90">{book.author}</p>
                  </div>
                </div>
              </div>
              
              <div className="p-4">
                <p className="text-gray-600 text-sm mb-4">{book.description}</p>
                <div className="flex justify-between items-center">
                  <a
                    href={book.downloadUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-rose-500 text-white rounded-full hover:bg-rose-600 transition-colors"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download</span>
                  </a>
                  <button className="p-2 text-rose-500 hover:text-rose-600">
                    <BookOpen className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="text-center py-8 text-rose-700">
        <p className="flex items-center justify-center gap-2">
          {/* Made with <Heart className="w-4 h-4 fill-current" /> for you */}
          Loved you yesterday, love you still, always have, always will.
        </p>
      </footer>
    </div>
  );
}

export default App;