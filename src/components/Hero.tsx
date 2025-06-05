'use client'

import Link from 'next/link'
import Image from 'next/image'
import styled, { css } from 'styled-components'

import Button from '@/components/Button'
import Typography from '@/components/Typography'
import { MediaQuery } from '@/utils/mediaQueries'
import { addQueryStringParams } from '@/utils/url'

const Banner = styled.div`
  position: relative;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  overflow: hidden;
  background: var(--brand-primary);
`

const HeroInner = styled.div`
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  color: var(--white);
  padding: 240px 60px 30px;

  @media (max-width: ${MediaQuery.screenMd}) {
    padding: 120px 40px 30px;
  }

  @media (max-width: ${MediaQuery.screenSm}) {
    padding: 120px 20px 30px;
  }
`

const HeroImage = styled(Image)`
  object-fit: cover;
  position: absolute;
  top: 0;

  @media (max-width: ${MediaQuery.screenMd}) {
    width: 120% !important;
  }

  @media (max-width: ${MediaQuery.screenSm}) {
    height: 100% !important;
    width: 220% !important;
  }
`

const HeroH1 = styled(Typography).withConfig({
  shouldForwardProp: (prop) => !['variant'].includes(prop),
})`
  color: var(--white);
  font-size: 80px;
  font-family: var(--font-family-secondary);
  margin: 0 0 -20px;

  @media (max-width: ${MediaQuery.screenMd}) {
    font-size: 50px;
    line-height: 1.2;
  }
`

export default function Hero() {
  return (
    <Banner>
      <HeroInner>
        <Typography
          variant="body"
          as="h2"
          style={{
            fontSize: '1.4rem',
            margin: '0 0 20px 0',
            color: 'var(--white)',
          }}
        >
          Galactic Cannabis Emporium
        </Typography>
        <HeroH1 variant="h1" as="h1" style={{ margin: 0, maxWidth: '700px' }}>
          Where the Force Guides Your High
        </HeroH1>
        <div
          css={css`
            padding: 40px 0;
            display: flex;
            flex-direction: row;
            gap: 20px;

            @media (max-width: ${MediaQuery.screenSm}) {
              flex-direction: column;
              gap: 20px;
              width: 100%;

              button {
                width: 100%;
              }
            }
          `}
        >
          <Link href="/shop">
            <Button
              size="default"
              variant="primary"
              style={{ paddingInline: '80px' }}
            >
              Order from the Galaxy
            </Button>
          </Link>
          <Link
            href={addQueryStringParams('/shop', {
              discounted: true,
            })}
          >
            <Button
              size="default"
              variant="secondary"
              style={{ paddingInline: '80px' }}
            >
              Galactic Deals
            </Button>
          </Link>
        </div>
      </HeroInner>
      <HeroImage
        alt="Star Wars Hero"
        priority={true}
        loading={'eager'}
        height={165}
        width={500}
        quality={70}
        sizes="100vw"
        style={{
          width: '100%',
          height: 'auto',
        }}
        src={'https://starwarsblog.starwars.com/wp-content/uploads/2015/11/empireStrikesBack_wide-1536x864.jpeg'}
      />
    </Banner>
  )
}
